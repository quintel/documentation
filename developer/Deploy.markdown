# Deploy Procedure

Assuming everything works as expected on beta:

1. Add a notice on live server

    http://et-model.com/admin/general_user_notifications

1. Add git tags on current production branches (ETM, ETE, ETS)
1. Backup production databases (etmodel/etengine) - use Sequel Pro, mysqldump or whatever suits you best
1. Prepare the new dbs, which will merge staging data with production data
   ## ETEngine
   New database = ete_staging + (ete_production's scenarios and users)

   1. Create locally a new db (ete_new)
   1. Dump ete_staging
   1. Load the ete_staging dump into it
   1. Dump from ete_production the users and scenarios tables
   1. Load these tables on ete_new
   1. Clean-up records on ete_new
     - remove stale scenarios:
       This query is a decent starting point, refine as neeeded:
       ```sql
       DELETE FROM scenarios WHERE
         user_id IS NULL
         AND protected IS NULL
         AND description IS NULL
         AND (title = 'API' OR title IS NULL)
       ```
     - make other SQL fixes as needed
   1. Dump ete_new
   1. Load in on ete_production (overwrite production db)

   # ETModel
   1. Create etm_new locally
   1. Dump etm_staging
   1. Load etm_staging dump
   1. Tables you should overwrite:
     - comments
     - saved_scenarios
     - users
     Dump the content of these tables (from etm_production) and load the dump on etm_new
   1. Clean up stale records as needed
      ```sql
       DELETE FROM sessions;
       ```
   1. Dump etm_new
   1. Import etm_new on etm_live

1. Merge/rebase the production branch of each application on top of staging. Force push if you have to, try to keep the git history as linear as possible
1. Deploy the application (both ETE and ETM)

    cap production deploy

1. On etengine_live, import the latest etsource. Make sure ETS production branch has been rebased/merged with master, since ete_production uses ETS' production branch.

# Post deploy checks

If new gems were added it might be a good idea to force restart the web server and/or memcached to purge stale cache.

    sudo /etc/init.d/unicorn-etmodel restart  (on ETM)
    sudo /etc/init.d/unicorn-etengine restart (on ETE)
    sudo /etc/init.d/memcached restart        (on both)
