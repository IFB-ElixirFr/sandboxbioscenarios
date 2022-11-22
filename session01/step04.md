<script>
import Alert from "components/Alert.svelte";
import Quiz from "components/Quiz.svelte";
</script>

The Bash shell provides you with a working space including files and directories.

A very useful command is `ls`, that **l**i**s**ts the content of a directory.
On your Unix terminal on the right, type `ls` and then press <kbd>enter</kbd>.

The Bash shell should display `Data` that is a directory named `Data`.

Now, type the following command in your terminal (and press <kbd>enter</kbd>) :

```bash
ls Data
```

The Bash shell should display the 8 files included in the `Data` directory.

Remarks : 
* pay attention to the space character between `ls` and `Data`
* don't forget to press <kbd>enter</kbd> to run commands
* `ls` is the command **name**
* `Data` is a directory name and an **argument** of the `ls` command

### Options

Options modify the way in which a command works.
In Bash, shell options start with a simple or double dash (`-` or `--`).

For example, we can display the size of the files using the `--size` option of the `ls` command. 
Lets try and type: 

```bash
ls --size Data
```

Now, the 8 files are displayed with their respective sizes (in blocks). 

You can use a short form for this option by replacing `--size` (long form) by `-s` (short form).

Usually we use `-h` option to display sizes in more **h**uman readable formats (_e.g._ 1K, 234M, 2G). 

You can use several options in the same command.

You can merge short form options using a single dash as prefix.
Example: type the following command in your terminal:

```bash
ls -sh Data
```

<Quiz id="q1" choices={[
	{ valid: true, value: "ls -s -h Data"},
	{ valid: true, value: "ls -sh Data"},
	{ valid: false, value: "ls -size -h Data"},
	{ valid: true, value: "ls --size -h Data"},
	{ valid: false, value: "ls --sizeh Data"},
	{ valid: false, value: "ls --size-h Data"},
	{ valid: true, value: "ls -h -s Data"},
	{ valid: true, value: "ls -hs Data"},
	{ valid: false, value: "ls -hsize Data"},
]}>
	<span slot="prompt">
		Among the following commands, which ones are correct?
	</span>
</Quiz>

<Alert>
### Summary

Here we learn that:
- we can execute a command by typing its name (options and/or arguments) and pressing <kbd>enter</kbd>
- we can add options to modify the command behavior
- options start with a dash `-` (short form) or a double dash `--` (long form)
- several options of the short form can be combined (without space and after a single dash)
- command name can be followed (or not) by an argument
</Alert>




