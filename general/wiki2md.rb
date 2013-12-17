# Script to convert wiki files into markdown using Pandoc
# Provide the script with a list of document names (ending in .txt)
# ruby wiki2md.rb <file>
# where file contains a list of file names:
#
# file1.txt
# file2.txt
# ...
require 'open3'

lines = open(ARGV[0]).readlines()

lines.each do |l|

  name = l.split('.txt')[0]
  command = "pandoc -f mediawiki -t markdown_github #{name}.txt -o #{name}.md"
  puts command
  stdout,stderr,status = Open3.capture3(command)
  
end