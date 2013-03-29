# Deploy Procedure

Assuming everything works as expected on beta:

1. Add a notice on live server

    http://et-model.com/admin/general_user_notifications

1. Add git tags on current `production` branches (ETM, ETE, ETS) and push them up to `origin`. The current naming format is `production-YYYY-MM-DD`.
1. Backup production databases (`etmodel` and `etengine`) - use Sequel Pro, `mysqldump` or whatever suits you best
1. Prepare the new dbs, which will merge staging data with production data
   
## ETEngine
New database = etengine_staging + (etengine (production) scenarios and users)

1. Create locally a new db *ete_new*
1. Dump *etengine_staging*
1. Load the *etengine_staging* dump into it
1. Dump from *etengine* (production) the `users` and `scenarios` tables
1. Load these tables on *ete_new*
1. Clean-up records on *ete_new*
 - remove stale scenarios:
   This query is a decent starting point, refine as neeeded:

    ```
    DELETE FROM scenarios WHERE
    user_id IS NULL
    AND protected IS NULL
    AND description IS NULL
    AND scenarios.created_at < DATE_ADD(NOW(), INTERVAL -4 WEEK)
    AND (title = 'API' OR title IS NULL)
    ```

 - make other SQL fixes as needed
1. Dump *ete_new*
1. Load *ete_new* on *etengine* (overwrite production db)

## ETModel
1. Create *etm_new* locally
1. Dump *etmodel_staging*
1. Load *etmodel_staging* dump on *etm_new*
1. Tables you should overwrite:
 - `comments`
 - `saved_scenarios`
 - `users`
 Dump the content of these tables (from *etmodel* (production)) and load the dump on *etm_new*
1. Clean up stale records as needed
  ```
  DELETE FROM sessions;
  ```
1. Dump *etm_new*
1. Overwrite *etmodel* (production) with *etm_new*

1. Merge/rebase the production branch of each application on top of staging. Force push if you have to, try to keep the git history as linear as possible
1. Deploy the application (both ETE and ETM)

       cap production deploy

1. On et-engine.com (production), import the latest etsource. Make sure ETS `production` branch has been rebased/merged with `master`, since et-engine.com live uses ETS' `production` branch.
1. You should reindex the ETM content by running this command on the console:

         RAILS_ENV=production bundle exec rake sunspot:reindex

   Or using this capistrano recipe:

        cap production solr:reindex


1. Go to http://et-model.com/admin and click on 'clear cache'

# Post deploy checks

If new gems were added it might be a good idea to force restart the web server and/or memcached to purge stale cache.

    sudo /etc/init.d/unicorn-etmodel restart  (on ETM)
    sudo /etc/init.d/unicorn-etengine restart (on ETE)
    sudo /etc/init.d/memcached restart        (on both)

Another way to restart the unicorn process is through monit commands (the watchdog process):

    sudo monit restart unicorn_etmodel_master  (on ETM)
    sudo monit restart unicorn_etengine_master (on ETE)

If the full-text search doesn't work, make sure SOLR is running (it's managed by a tomcat instance).

When everything's fine you can remove the notice from the live server (unless it was removed when you overwrote the production database).
