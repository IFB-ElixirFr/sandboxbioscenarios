<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

objectif : dissocier outils bash d’autres outils créés par des développeurs info ou bioinfo
différence : les outils “tiers” ne respectent pas toujours les “usages” des commandes bash, 
par exemple pour les options (courtes, longues), 
pas de `man outil` et donc les options pour l’accès à l’aide varient (ex. -h -help, –help, nom de l’outil seul, …), 
pas toujours possible de les piper, 
notion de “boite à outils” (plusieurs outils ensemble)


##  Bash vs. Bioinformatics Tools

There are bash commands built into the system and specialized bioinformatics tools developed to address specific scientific needs.
It is important to distinguish between bash commands and others bioinformatics tools, as they serve different purposes and have distinct functionalities.

Third-party tools do not always adhere to the conventions of native Bash commands. For example:
 - options may differ, using a mix of short (-h) and long (--help) formats or even requiring the tool name alone to access help.
 - They often lack a manual page (man tool), making help access inconsistent.
 - These tools may not support piping, limiting their integration in workflows.
 - Many are designed as toolkits, bundling multiple utilities together for specialized tasks.
 - Understanding these differences is crucial for efficient use.



```bash
todo
```

Some exmaple text

📕 text 1

📕 text 2


Example quizzz

<Quiz id="q1" choices={[
         { valid: false, value: "grep foo file01 > file02"},
         { valid: true, value: "grep foo file01 >> file02"},
         { valid: false, value: "grep foo file02 >> file01"},
	 { valid: false, value: "grep file01 file02 > foo"},
]}>
        <span slot="prompt">
	Which command appends its result at the end of the file02 file ?
        </span>
</Quiz>
