<script>
import Quiz from "components/Quiz.svelte";
</script>

Run the `pwd` command in the right panel.

The output is the absolute path `/shared/data` and means that you are currently located in `/shared/data`. 

<!---
Remark: In a Unix system, the administrator (the boss) is called root. And you are presently in its personal directory that is also called `root`! 
-->

If you type the `ls` command, you should see a sud-directory called `bank`:

```bash
ls -p
```

From the present current working directory, we would like to see what is inside the sub-directory called `bank`. 
To represent the current working directory, we need the symbol `.` (dot). 
The relative path to the `bank` sub-directory is `./bank`.

```bash
ls ./bank
```

By default, relative paths start from the current working directory, so `./` could be omitted:

```bash
ls bank
```
There are 3 sub-directories in `bank`: `box_taurus`, `homo_sapiens` and `nr`.

The `..` operator is handy to write a path relative to a directory. 
It means _one level up in the directory tree_. 
For instance from the `/shared/data` directory where you are, you may list the content of the `/shared` directory using:

```bash
ls -p ..
```

The same result would be obtained here using the absolute path:

```bash
ls -p /shared
```

In an other example, you could list the content of `data` with a relative path:

```bash
ls ../data
```

The same result would be obtained with the absolute path:

```bash
ls /shared/data
```
<Quiz id="q1" choices={[ { valid: true, value: "absolute"}, 
						 { valid: false, value: "relative"}, ]}> 
	<span slot="prompt">
		Which type of path is `/shared/data`?
	</span>
</Quiz>

<Quiz id="q2" choices={[ { valid: false, value: "0"}, 
						 { valid: false, value: "1"},
       						 { valid: true, value: "2"},
	      					 { valid: false, value: "3"},]}> 
	<span slot="prompt">
		From the `/shared/data` directory, how many `../` do you need to list the contents of the root directory?
	</span>
</Quiz>

<Quiz id="q3" choices={[ { valid: false, value: "/"}, 
						 { valid: false, value: "/shared"}, 
						 { valid: true, value: "/shared/data/bank"}, ]}>
	<span slot="prompt">
		If your current working directory is `/shared/data/bank/homo_sapiens`, to which absolute path refers the path `..` ?
	</span>
</Quiz>

<Quiz id="q4" choices={[ { valid: false, value: "homo_sapiens/hg19/fasta"}, 
						 { valid: false, value: "../../hg19/fasta"}, 
						 { valid: true, value: "../homo_sapiens/hg19/fasta"}, ]}> 
	<span slot="prompt">
		If your current working directory is `/shared/data/bank/bos_taurus` what is the relative path to `/shared/data/bank/homo_sapiens/hg19/fasta`?
	</span>
</Quiz>
