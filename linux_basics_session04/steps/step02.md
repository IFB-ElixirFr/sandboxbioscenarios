<script>
import Quiz from "$components/Quiz.svelte";
import Execute from "$components/Execute.svelte";
</script>

As in the case of **stdout** the standard input  of a command is also abbreviated, here as **stdin**.

<img src="/data/linux_basics_session04/stream_in_out.png" style="max-width:100%" alt="input stream of a command">

In Unix-like operating systems, the default standard input (**stdin**) for a command is typically connected to the keyboard. This means that when you run a command in a terminal and it expects input from the user. You can change this behavior and send the content of a file to a command using the `<` operator.	

⚠️ Currently, the `<` operator is not supported in this course. We will change this as soon as possible but in the meantime the following commands do not work.

As an example, the `tr` command translates (or deletes) characters from a text supplied as input. If we want to convert the `NC_009089.fasta` file that contains a DNA sequence into an RNA sequence (replacing T with U) and switch from upper to lower cases, we can use the following command:

```bash
tr AGCT agcu < NC_009089.fasta
```

Remark: `cat NC_009089.fasta` is equivalent to `cat < NC_009089.fasta` but the later is seldom used.

<!--
<img src="/data/linux_basics_session04/stream_infile_out.png" style="max-width:100%" alt="input stream of a command">
-->
