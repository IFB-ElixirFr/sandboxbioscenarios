<script>
import Quiz from "components/Quiz.svelte";
</script>

## Create directory

The `mkdir` command (**m**a**k**e **dir**ectory) creates a new directory whose name is given as argument.

Use the `mkdir` command to create a repository `my_dir` in your HOME directory. To do so, first go to your HOME with the `cd` command, create the directory with the `mkdir` command, and see the result with the `tree` command:

```bash
cd
tree
mkdir my_dir
tree
```

Still from your HOME directory, create another directory nammed `my_dir2` into the directory `/shared/data/tutorials/linux_basics_session02/projects`. 
Use the command `tree` to display the file and directory organisation from the directory `/shared/data/tutorials/linux_basics_session02/projects`. Reminder: be lazy and use the <kbd>Tab</kbd> key to speed up your writing of the path.

```bash
cd
mkdir /shared/data/tutorials/linux_basics_session02/projects/my_dir2
tree /shared/data/tutorials/linux_basics_session02/projects/
```

## Copying files and directories

The `cp` (**c**o**p**y) command copies files or directories. It takes 2 paths as argument. These paths may be absolute or relative paths or filenames or the current directory named with '.'


`cp source_path destination_path`


Example: go to the `~/test` directory and duplicate the file named `first_file.txt` while changing its name to `third_file.txt`:

```bash
cd ~/test
cp first_file.txt third_file.txt
ls 
```
<!---
With the option `-r` (**r**ecursive), the `cp` command copies all files of the source directory to the destination directory.

⚠️ Currently, the `-r` option is not supported in this course. We will change this as soon as possible but in the meantime the following commands do not work.

Try to copy the `~/test` repository and its content to a new directory named `my_test` in the directory `/shared/data/tutorials/linux_basics_session02/projects`:

```bash
tree /shared/data/tutorials/linux_basics_session02/projects
cp -r ~/test /shared/data/tutorials/linux_basics_session02/projects/my_test
tree /shared/data/tutorials/linux_basics_session02/projects
```
--->

<Quiz id="qndir" choices={[
	{ valid: false, value: "0"},
	{ valid: true, value: "1"},
	{ valid: false, value: "2"},
	{ valid: false, value: "3"},
]}>
	<span slot="prompt">
		Create a new repository named `new_dir` into the directory `/shared/data/tutorials/linux_basics_session02/projects`. In this directory `new_dir`, copy the file `~/test/first_file.txt` and rename it `1st_file.txt`. How many files are listed with the command `tree /shared/data/tutorials/linux_basics_session02/projects/facts/new_dir` ?
	</span>
</Quiz>

