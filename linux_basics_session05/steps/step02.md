<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

outil sekqit
présentation de l’outil : manipuler des fichiers de séquences notamment au format fasta

Pour utiliser un outil tier, il faut qu’il soit présent dans l’arborescence des fichiers, on appelle cela “installer un outil”

On peut voir où l’outil seqkit a été installé avec la commande bash “which” suivie du nom de l’outil : 
which seqkit

On peut donc utiliser l’outil et la première chose à faire est de lire l’aide. 
Elle est souvent présente sur internet (et même il existe des tutoriels). 
A titre d’exemple, l’aide pour seqkit est ici : https://bioinf.shenwei.me/seqkit/

A tout instant, il y a aussi un accès à une aide directement accessible et affichable dans le terminal (elle sera peut-être un peu moins détaillée que celle fournie sur internet). Comme on ne sait pas à l’avance comment demander l’aide, on écrit simplement le nom de l’outil et cela indique souvent comment obtenir une aide détaillée. Sinon on teste les différentes possibilités -h, -help, –help

quizz quelles sont les instructions pour obtenir l’aide de seqkit?
(*) seqkit -h
(*) seqkit –help
(*) seqkit
seqkit -help

