<script>
import Quiz from "components/Quiz.svelte";
</script>

In this session you have discovered the 3 data streams of an unix command: the input stream (`stdin`), the output stream (`strout`) and the error stream (`stderr`):

<img src="/data/linux_basics_session04/stream_in_out_err.png" style="max-width:100%" alt="3 streams of a command">

You have also learned that, by default, these streams are directed to the screen but that they can be redirected to files:

<img src="/data/linux_basics_session04/stream_in_outfile_errfile.png" style="max-width:100%" alt="files stream of a command">

More importantly, you have also learned that, using pipes, you can bypass intermediate files and build a sophisticated instruction that integrates a sequence of multiple individual commands:

<img src="/data/linux_basics_session04/stream_pipe.png" style="max-width:100%" alt="a complex command">

These instructions can be used for instance using a bed or gff as input to:

*  compute the number of non-redundant genes of a bed file
*  extract the ith line of a bed file
