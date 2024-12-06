<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

# The seqkit tool

To test the discovery of a bioinfo tool, we suggest you discover the `seqkit` tool.

This tool can be used to manipulate sequence files, particularly in fasta format.

To use a third-party tool, it must be present in the file tree. 
If it is not present, it must be added, which is called “installing a tool”.
Special privileges (called “root rights”) are sometimes required to install a tool.
In this case, ask your administrator.

You can see where the seqkit tool has been installed with the bash command `which` followed by the tool name: 
```bash
which seqkit
```
The `seqkit` tool is indeed available and can be used. 

The first thing to do is to read the help. 
It's often available on the Internet (and there are even tutorials). 
For example, the help for seqkit is here: https://bioinf.shenwei.me/seqkit/

At all times, there is also access to directly accessible help that can be displayed in the terminal (perhaps a little less detailed than that provided on the Internet). 
Since we don't know in advance how to request help, we simply write the name of the tool and this often indicates how to obtain detailed help. 
Alternatively, you can test the various options `-h`, `--help`, `-help`

quizz what are the seqkit help instructions?
(*) seqkit -h
(*) seqkit --help
(*) seqkit


