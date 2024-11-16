<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

##  todo

```bash
todo
```

objectif : dissocier outils bash d’autres outils créés par des développeurs info ou bioinfo
différence : les outils “tiers” ne respectent pas toujours les “usages” des commandes bash, 
par exemple pour les options (courtes, longues), 
pas de `man outil` et donc les options pour l’accès à l’aide varient (ex. -h -help, –help, nom de l’outil seul, …), 
pas toujours possible de les piper, 
notion de “boite à outils” (plusieurs outils ensemble)

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
