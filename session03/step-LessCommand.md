### *less*

Very often the files you want to read are too large for your screen.
For instance, display the content of the file _bidule.fasta_ with the `cat` command.

The `less` command allows you to open a file and browse its content interactively (line by line or page by page): 

`less bidule.fasta`

Once in *less*, you can use the following keys to navigate into the file:

- <kbd>enter</kbd> : go down one line
- <kbd>space</kbd> : go down one page
- <kbd>b</kbd> : go up one page
- <kbd>g</kbd> : go to the beginning of file
- <kbd>G</kbd> : go to the end of file

You can also search through the file you opened with `less` by typing <kbd>/</kbd> followed by the characters you want to search and then pressing <kbd>enter</kbd>. 
The screen will jump to the first occurrence of the searched item which will be highlighted.
Pressing <kbd>n</kbd> will bring you to the next occurence. 
Proceeding that way will search forward into the file. 
To search backwards, you need to use <kbd>?</kbd> instead of <kbd>/</kbd> and then proceed similarly.
Use <kbd>q</kbd> to quit the *less* command.

