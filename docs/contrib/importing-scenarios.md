---
title: Database setup and importing scenarios
---

This guide covers setting up your local ETM databases and importing scenarios using the dump-n-load architecture.

## Prerequisites

Before starting, ensure you have followed the setup guide in 'internal':

- **MySQL 8.0+** installed via Homebrew
- **Ruby 3.2.7** installed
- **Bundler** installed (`gem install bundler`)
- All ETM repositories cloned (MyETM, ETEngine, ETModel, ETSource)

:::info Setup order matters
MyETM must be set up **first** because it's the OAuth provider for ETEngine and ETModel. Follow the steps in order.
:::

## Initial database setup

### 1. Install and start MySQL

```bash
brew install mysql
brew services start mysql
```

### 2. Set up MyETM database (FIRST!)

MyETM is the authentication provider for the entire ETM ecosystem, so it must be configured before ETEngine or ETModel.

```bash
cd myetm
bundle install
bin/rails db:prepare
```

This creates the database, runs migrations, and seeds an admin user. **Save the password displayed in the output:**

```
+------------------------------------------------------------------------------+
|         Created admin user 'Seeded Admin' with password: aBc123Xy         |
|           and email: seeded_admin@localdevelopment.com.                   |
+------------------------------------------------------------------------------+
```

### 3. Start MyETM

```bash
bin/dev -p 3002
# Or: rails s -p 3002
```

Wait for "Listening on..." before proceeding.

### 4. Set up ETEngine database

```bash
cd etengine
bundle install
bin/rails db:prepare
```

:::warning ETSource required
ETEngine requires ETSource to be cloned in the same parent directory. If you get errors about missing datasets, ensure etsource is cloned alongside etengine.
:::

### 5. Start ETEngine

```bash
bin/dev -p 3000
# Or: rails s -p 3000
```

:::info First scenario delay
The first time you create a scenario, ETEngine calculates the base dataset (Netherlands). This takes 5-15 seconds. Be patient!
:::

### 6. Verify both servers are running

- MyETM: http://localhost:3002
- ETEngine: http://localhost:3000

You should be able to access both URLs in your browser.

## Getting .etm files for import

To import scenarios, you first need a `.etm` file. There are two ways to get one:

### Option 1: Export from MyETM admin interface (recommended)

If you have access to a production or staging MyETM instance:

1. **Log in as admin**

2. **Navigate to admin section**
   - Click "Admin" in the navigation
   - Click "Saved Scenarios" in the admin menu
   - URL: `https://my.energytransitionmodel.com/admin/saved_scenarios`

3. **Filter for scenarios**
   - Check "Featured" to show only featured scenarios
   - Filter by version, end year, or area code as needed

4. **Select scenarios to export**
   - Click checkboxes next to desired scenarios
   - Or click "Select all" to export all filtered scenarios

5. **Export**
   - Click the "Export" button
   - A `.etm` file will download (format: `YYYYMMDDHHMM_env.etm`)

6. **Save the file**
   - File downloads to your Downloads folder by default
   - Ready to import to your local environment

### Option 2: Get from a team member

Ask a team member to export scenarios using the steps above and share the `.etm` file with you.

## Importing scenarios

With both servers running and a `.etm` file ready:

### 1. Run the import script

```bash
cd myetm
bin/import-scenarios
```

The script will:
1. Detect any `.etm` file
2. Warn you that import will modify your database
3. Prompt for confirmation
4. Load scenarios via ETEngine API
5. Create SavedScenario records in MyETM
6. Display results and ID mappings

### 2. Verify the import

Check the output for:
- Number of scenarios loaded
- Scenario ID mappings (production ID → local ID)
- Any warnings about missing data

### 3. Access imported scenarios

- View in MyETM: http://localhost:3002
- Open in ETModel: http://localhost:3001 (requires ETModel setup)

## Command options

### Specify owner

```bash
bin/import-scenarios --user your.email@example.com
```

By default, scenarios are owned by the first admin user.

### Handle duplicates

Control what happens when a scenario ID already exists:

```bash
# Always update existing scenarios (default)
bin/import-scenarios --on-dup update

# Always create new scenarios
bin/import-scenarios --on-dup create

# Prompt for each duplicate
bin/import-scenarios --on-dup prompt
```

### Search in different directory

```bash
# Look for .etm files in db/dumps instead of ~/Downloads
bin/import-scenarios db/dumps

# Or specify exact file path
bin/import-scenarios /path/to/scenarios.etm
```

### Get full help

```bash
bin/import-scenarios --help
```

## Troubleshooting

### ETEngine connection errors

**Problem:** Import fails with "Connection refused" or timeout errors

**Solution:** Ensure ETEngine is running on port 3000:

```bash
cd etengine
bin/dev -p 3000
# Wait for "Listening on..."
```

Check that you can access http://localhost:3000 in your browser.

### MyETM not running

**Problem:** Script error: "Database connection failed" or similar

**Solution:** The import-scenarios script runs within MyETM's context. Ensure the database is set up:

```bash
cd myetm
bin/rails db:prepare
```


### No admin user

**Problem:** "No users found in database!"

**Solution:** Re-run the seeds:

```bash
cd myetm
bin/rails db:seed
# Save the password displayed!
```

### Duplicate scenario prompts

**Problem:** Import keeps asking about duplicate scenarios

**Solution:** Use `--on-dup update` to automatically update existing scenarios:

```bash
bin/import-scenarios --on-dup update ~/Downloads/scenarios.etm
```

### File not found

**Problem:** "No .etm scenario dump files found"

**Solution:**
- Ensure the file has a `.etm` extension
- Check you're looking in the right directory (defaults to `~/Downloads`)
- Specify the file path directly: `bin/import-scenarios /path/to/file.etm`

### First scenario takes forever

**Problem:** Creating or loading the first scenario is very slow

**Solution:** This is normal! ETEngine must calculate the base dataset (Netherlands) on first use. This takes 5-15 seconds. Subsequent scenarios will be much faster.

## What gets imported

Each `.etm` file contains:

**From ETEngine:**
- Slider values (user_values)
- Custom hourly curves
- Merit order configurations
- Area code, end year, privacy settings

**From MyETM:**
- Scenario title and description
- User permissions (owner, collaborators, viewers)
- Version tags
- Scenario ID history (tracks origin from production)

## Exporting scenarios to share

To create a `.etm` file from your local scenarios to share with your team:

1. **Access MyETM admin:** http://localhost:3002/admin/saved_scenarios
2. **Select scenarios** you want to export using checkboxes
3. **Click "Export"** button
4. **Share the downloaded `.etm` file** with your team

They can then import it using `bin/import-scenarios`.

## Next steps

After importing scenarios:

1. Access them in MyETM at http://localhost:3002
2. Set up ETModel to view and modify scenarios in the UI
3. Use imported scenarios as starting points for development
4. Export modified scenarios to share with your team
