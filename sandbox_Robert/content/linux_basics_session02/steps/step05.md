<script>
import Quiz from "$components/Quiz.svelte";
</script>

When used without argument, the `cd` command will set the current working directory to your HOME directory. 
The HOME directory is the default personal directory of a user. However, bear in mind that this HOME directory is not always the right place to store large files, particularly on a cluster with shared resources (ask your administrator!).

```bash
pwd
cd 
pwd
tree
```

The symbol for the HOME directory is `~` (tilde). This character can be accessed under a PC keyboard using <kbd>AltGr</kbd> + <kbd>2</kbd>. With a Mac OSX keyboard, it may be accessed using <kbd>option</kbd> + <kbd>n</kbd>. 

<!--- (sandbox.bio)/root/tutorial vs (IFB)/shared/data -->
In the example below we successively go to the `/root/tutorial/bank` then `/root` directories:
```bash
cd /root/tutorial/bank
pwd
cd ~/test
pwd
```


To answer the next question, please type the 3 following commands:
<!--- (sandbox.bio)/root/tutorial vs (IFB)/shared/data -->
```bash
cd /root/tutorial/bank/nr
cd ~/test
cd
```

<!--- (sandbox.bio)/root/tutorial vs (IFB)/shared/data -->
<Quiz id="q1" choices={[ { valid: false, value: "/root/tutorial/bank/nr"}, 
						 { valid: false, value: "test"}, 
						 { valid: true, value: "your HOME directory"}, 
						 { valid: false, value: "/root/tutorial"}, 
						 { valid: false, value: "nr"},
						 { valid: false, value: "/root/test"}, ]}> 
	<span slot="prompt">
		...and select the right current working directory:
	</span>
</Quiz>
