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

A tout instant, il y a aussi un accès à une aide directement accessible et affichable dans le terminal (elle sera peut-être un peu moins détaillée que celle fournie sur internet). Comme on ne sait pas à l’avance comment demander l’aide, on écrit simplement le nom de l’outil et cela indique souvent comment obtenir une aide détaillée. Sinon on teste les différentes possibilités -h, -help, –help

quizz quelles sont les instructions pour obtenir l’aide de seqkit?
(*) seqkit -h
(*) seqkit –help
(*) seqkit
seqkit -help

