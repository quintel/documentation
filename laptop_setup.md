# Installing software on Macbook Pro

In the midst of doing a clean install on my new MacBook, I realized I should log the steps required in order to have the system ready to work with QI's repositories and run QI's applications locally.

### System Preferences
- Turn the scrolling around if you don't like it in `System Preferences` > `Trackpad`
- Enable dragging by two taps in `System Preferences` > `Accessibility Options`
- Enable tabbing through menus in `System Preferences` > `Keyboard` 
- If you find your keyboard etc. too slow (I do) install [remappers](http://pqrs.org/macosx/keyremap4macbook/)

### Package Manager (Home Brew)
- Install [Homebrew](https://github.com/mxcl/homebrew/wiki/installation).
- Do not install anything different, such as *fink* or *mac ports*

### Git
- Install Git with brew: `brew install git`
- Put your own `.gitconfig` in your home directory.
- Install git up. It's the bomb. `gem install git-up`

### RSA keys
- Generate new RSA keys for your own computer `ssh-keygen -t RSA -C "yourname@quintel.com"`
  (decide for yourself whether or not you would like to use a passphrase)
- Put your own `config` in your `~/.ssh` directory

### Github
- Upload your public key `~/.ssh/id_rsa.pub` to `github` > `admin`
- Make sure your `.gitconfig` contains your `user.name` and `user.email`

### ZShell:
- Install [iTerm2](http://www.iterm2.com/#/section/home)
- Change Shell to ZSh in 
  > System Preferences > Users and Groups > Unlock > Right click user name 
    > Advanced Options > Select Zsh from 'Login Shell'
- Install [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
- Make sure you add required stuff to `~/.zshenv`, as described in the [README](https://github.com/sstephenson/rbenv)
- Put your own `~/.zshrc` in your home directory

### Ruby
- Install [rbenv](https://github.com/sstephenson/rbenv/)
  (uninstall rvm following [SO](http://stackoverflow.com/questions/3950260/howto-uninstall-rvm)
- Install [ruby-build](https://github.com/sstephenson/ruby-build)
- Install a preferred Ruby version
- Make your preferred choice the system wide default

### Pow
- Install [Pow!](http://pow.cx)
- Install [powder](https://github.com/rodreegez/powder)

### Qt (needed for e.g. Capybara)
- Run `brew install qt`

### MySQL
- Install latest version of MySQL using the [Native Package](http://dev.mysql.com/downloads/mysql/5.5.html#macosx-dmg) (choose the 64-bit version and just press 'download', you don't need to fill in the whole form.). You can also use `brew install mysql`, but then you will not have the PrefPane options, and a lot more verbose to get everything to run (and it takes longer!). 
- If you run into a weird `.dylib` error, run the following command (from [StackOverflow](http://stackoverflow.com/questions/4546698/library-not-loaded-libmysqlclient-16-dylib-error-when-trying-to-run-rails-serv)):
`sudo ln -s /usr/local/mysql/lib/libmysqlclient.18.dylib /usr/lib/libmysqlclient.18.dylib`

### Vim
- Install [Vundle](https://github.com/gmarik/vundle)
- Put some Bundles in `~/.vimrc` (copy from [README](https://github.com/gmarik/vundle) e.g.) 
- run `:BundleInstall` in vim (ignore errors upon loading vim)
- Download and install [MacVim](http://code.google.com/p/macvim/)
- Put your own .gvimrc in your home directory
- make directories for temp files and backup files `mkdir ~/.vim/_temp ~/.vim/_backup`

### Command-T (for MacVim)
- Go to `/.vim/bundle/Command-T/ruby/command-t`
- Run `rbenv local system`
- Run `ruby extconf.rb`
- Run `make`
- Check out [documentation](https://github.com/wincent/Command-T) if building c-extensions fails.
- Restart MacVim
- Hit <leader>t. Leader can be `/` or `,`: does it work?

### Ack
- Install with `brew install ack`
