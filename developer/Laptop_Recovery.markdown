# Laptop Recovery (Mac OS X) #
If your laptop does not boot further than a grey screen, then you can try the
following:  
1. When rebooting, hold Command-S. You should enter the console view.  
2. type `fsck_hfs -rf /dev/diskXsY`, where X and Y are integers corresponding to 
a particular partition. You need to experiment which ones are correct.  
3. When the command is finished you will either see a message that the drive was
repaired successfully or that it was not repaired.  
If it does not help, then you can try to use [DiskWarrior](http://www.alsoft.com/diskwarrior/).

## DiskWarrior ##
First, you need to obtain DVD with DiskWarrior and a USB FlashDrive (>4GB).
### Record DiskWarrior: ###
1. Insert DiskWarrior DVD into DVD-drive. Insert USB stick into your (non-broken) laptop.
2. Launch Disk Utility and select your USB stick (and not partition which is being
displayed as a submenu of your USB stick).
3. Click Partition tab in DiskUtility window. Under Partition layout select `3 partitions`.
4. For each partition you can change name, you should select GUID Partition Table.,
select Format Mac OS Extended (Journaled). For simplicity, make sure that each
partition is not less than 2 GB.  
5. For each part _(there are 3 in total)_ of the DiskWarrior distribution:
  + Click on the part (e.g., PowerPC-DiskWarrior-startup). Click Restore tab in
DiskUtility window. Make sure that Source field contains title of the chosen part
(if not, then drag and drop it from left part of the Diskwarrior window to the 
Source field). Then drag and drop Partition, which you want to use for this part of
DiskWarrior, from left side to the Destination field.
  + Click Restore.
  + Confirm Erase.

### Using DiskWarrior ###
+ Insert USB stick into broken laptop.  
+ When booting, press and hold Option (Alt) key.  
+ Choose to boot DiskWarrior.  
+ In the DiskWarrior window select your hard drive.  
+ Click Graph if you want to see a graph of your HDD.
+ Click Rebuild to attempt to repair your HDD. 
It will show you what changes need to be made _(by DiskWarrior)_ in order to repair your HDD
_(if the recovery is possible)_. Some data might be lost during the recovery.

### Resources ###
+ [Macguides: Mac does not boot](http://guides.macrumors.com/Mac_doesn%27t_boot)
+ [Fixing invalid node structure in Mac OS X](http://african-heart.blogspot.nl/2010/07/fixing-invalid-node-structure-in-mac.html)
+ [Create DiskWarrior bootable usb flash drive](http://thehowto.wikidot.com/diskwarrior-bootable-usb)
+ [Using DiskWarrior to repair problems on MacOS X computers](http://techbase.msu.edu/article.asp?id=4264)
