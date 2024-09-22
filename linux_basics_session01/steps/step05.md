<script>
import Alert from "components/Alert.svelte";
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

The Bash shell provides you with a working space including files and directories.

A very useful command is `ls`, that **l**i**s**ts the content of a directory.
In your Unix terminal on the right, type `ls` and then press <kbd>Enter</kbd>:

```bash
ls
```

The Bash shell should display `Data` and `Data_file_list.txt`, where `Data` is a directory named `Data` and `Data_file_list.txt` is a file named `Data_file_list.txt`.

By convention, files have a name followed by an **extension** separated by a dot. The file extension indicates the file type, that is something similar to its category. Here, `txt` indicates a text file.
You will come across different file formats and therefore different extensions that are relevant to humans.

Now, type the following command in your terminal (and press <kbd>Enter</kbd>):

```bash
ls Data
```

The Bash shell should display the 8 files included in the `Data` directory and 3 files formats (`fna`, `gff`, `fastq`) which are widely used in bioinformatics.

Remarks:

* Pay attention to the space character between `ls` and `Data`
* Don't forget to press <kbd>Enter</kbd> to run commands
* `ls` is the command **name**
* `Data` is a directory name as well as an **argument** of the `ls` command

## Options

Options modify the way in which a command works.
In Bash, shell options start with a simple or double dash (`-` or `--`).

For example, we can display the size of the files using the `--size` option of the `ls` command. 
Let's try and type: 

```bash
ls --size Data
```

Now, the 8 files are displayed with their respective sizes (in blocks). 

You can use a short form for this option by replacing `--size` (long form) by `-s` (short form).

Usually we also use the `-h` option to display sizes in more **h**uman readable formats (_e.g._ 1K, 234M, 2G). 

You can use several options in the same command.

You can merge short form options using a single dash as prefix.

Another option for the `ls` command to distinguish a file from a directory is `-p` (or long form `--indicator-style`) that append the "/" indicator to directories.

Try: 

```bash
ls -p
```

<Quiz id="qls" choices={[
	{ valid: true, value: "Data/  Data_file_list.txt"},
	{ valid: false, value: "Data/  Data_file_list.txt/"},
  { valid: false, value: "Data  Data_file_list.txt"},
  { valid: false, value: "Data  /Data_file_list.txt"},
]}>
	<span slot="prompt">
		what is the result of the ls command with the -p option ?
	</span>
</Quiz>

