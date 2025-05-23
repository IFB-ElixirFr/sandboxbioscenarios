<script> 
import Quiz from "$components/Quiz.svelte"; 
</script> 

The `tree` command displays the tree-like organization of files and sub-directories contained in a particular directory.

In the example below, the `tree` command displays the subdirectories (option `-d`) contained in `/shared/data` directory with a maximum depth of two subdirectories (option `-L 2`):

```bash
tree -d -L 2 /shared/data
```

The displayed directories were created to store the genome files of several species. Here, the `bank` directory is a child of `data` but also the parent of `bos_taurus`.  

Given the result of the previous command we can guess the  path from the root `/` to the `homo_sapiens` directory. This path is:

```bash
/shared/data/bank/homo_sapiens
```

As stated previously, this path, starting with a `/` is an absolute path. It indicates that, starting from the root  `/`, we go through the `shared` then `bank` directories to reach the target `homo_sapiens` directory.

Paths can be provided to many Unix commands. One of the most useful is the `ls` (that stands for **l**i**s**t) command:

```bash
ls /shared/data/bank/homo_sapiens
```

The objective of the `ls` command is to display the content of a specific directory (also named **argument** of the ls command).

<Quiz id="q1" choices={[ 
      { valid: false, value: "hg18"}, 
      { valid: true, value: "hg19"}, 
      { valid: false, value: "hg37"}, 
      { valid: true, value: "hg38"}, 
]}> 
	<span slot="prompt">
    What does the command `ls /shared/data/bank/homo_sapiens` return? 
	</span>
</Quiz>  
  
Remark: Usually `hg` stands for **h**uman **g**enome and the number denotes the sequence version.
