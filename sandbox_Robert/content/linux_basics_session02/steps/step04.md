<script>
import Quiz from "$components/Quiz.svelte";
</script>

The `cd` command (**c**hange **d**irectory) can be used to visit another directory in the file tree. 
The target directory must be specified using an absolute or a relative path. 

To experiment with the `cd` command, run the following commands:

<!--- (sandbox.bio)/root/tutorial vs (IFB)/shared/data -->
```bash
pwd
cd /root/tutorial/bank/nr
pwd
cd ../homo_sapiens
pwd 
```
<!--- (sandbox.bio)/root/tutorial vs (IFB)/shared/data -->
<Quiz id="step04_q1" choices={[
	{ valid: false, value: "/root/tutorial/"},
	{ valid: true, value: "/root/tutorial/bank/homo_sapiens"},
	{ valid: false, value: "../tutorial/bank/nr"},
	{ valid: false, value: "/root/tutorial/bank/nr/homo_sapiens"},
]}>
	<span slot="prompt">
		Could you guess the absolute path of your current working directory?
	</span>
</Quiz>

Verify the answer with `pwd`.

## Automatic completion

To go from your current working directory to a target directory, you must specify names of all intermediate directories. This can be time-consuming if the target directory is far away from your current directory. 
The key <kbd>Tab</kbd> triggers auto-completion. It means you just need to type the first letters of a directory, then <kbd>Tab</kbd>, to get its full name. If there is more than one file or directory starting with the same letter, auto-completion will complete the name as far as it can. If you type a second time <kbd>Tab</kbd>, auto-completion will show you the available options.

The <kbd>Tab</kbd> key is perhaps the most used key in Unix!

<!--- (sandbox.bio)/root/tutorial vs (IFB)/shared/data -->
Use the <kbd>TAB</kbd> key and `cd` to go into the `/root/tutorial/bank/homo_sapiens/hg38/star-2.7.5a/` directory.

<Quiz id="step04_q2" choices={[
	{ valid: false, value: "2"},
	{ valid: false, value: "3"},
	{ valid: false, value: "4"},
	{ valid: true, value: "5"},
]}>
	<span slot="prompt">
	        <!--- (sandbox.bio)/root/tutorial vs (IFB)/shared/data -->
		How many files are in the `/root/tutorial/bank/bos_taurus/UMD3.1/star-2.7.2b/` directory?
	</span>
</Quiz>
