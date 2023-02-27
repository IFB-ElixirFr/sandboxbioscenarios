# Summary

In this session you have discovered the 3 data streams of an unix command: the input stream (`stdin`), the output stream (`strout`) and the error stream (`stderr`):

![3 streams of a command](./assets/stream_in_out_err.png)

You have also seen that these streams use the terminal display by default but that they can be redirected to intermediate files:

![files stream of a command](./assets/stream_in_outfile_errfile.png)

And more importantly, did you know that with pipes, you can "skip" intermediate files and build a "complex" command that combines the succession of several unit commands:

![a complex command](./assets/stream_pipe.png)
