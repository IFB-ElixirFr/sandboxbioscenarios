<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

The standard input of a command is named **stdin**

<img src="/data/ifb-4/stream_in_out.png" style="max-width:100%" alt="input stream of a command">

By default, **stdin** is set to the keyboard. But you can change this behavior and read **stdin** from a file. You must use the `<` operator to do this.

The `tr` command translates (or deletes) characters from a text provided as input. If the file `seq1` contains one DNA sequence that we want to convert in RNA sequence (by replacing T by U) and change from upper case to lowercase, we could use the following command:

<Execute command="tr [AGCT] [agcu] < seq1 " />

Remark: `cat toto` is equivalent to `cat < toto` but `cat < toto` is seldom used.

![input stream of a command](/images/stream_infile_out.png)
