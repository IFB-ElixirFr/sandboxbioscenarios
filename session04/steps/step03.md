<script>
import Execute from "components/Execute.svelte";
</script>

We previously introduced standard input and standard output. 

Input and Output of an Unix command are also named streams. Changing their default values (keyboard and screen) is called **redirection**.

In addition to standard input (**stdin**) and standard output (**stdout**), a third stream exists and is named standard error (**stderr**).

<img src="/data/ifb-4/stream_in_out_err.png" style="max-width:100%" alt="error stream of a command">

By default, **stderr** is also set to the screen. It can contain errors but also warnings and logs, depending on the command and parameters.

The following command generates an error (the search for a word in a file is correct but not in a directory):

<Execute command="grep toto /shared/data/bank/homo_sapiens" />

The error message will go in the **stderr** stream, that is printed on the screen by default.

The **stderr** stream can be empty if the Unix command runs without error.

As previously mentioned for **stdin** and **stdout**, it is also possible to redirect **stderr** to a file using the `2>` operator.

<img src="/data/ifb-4/stream_in_outfile_errfile.png" style="max-width:100%" alt="error stream of a command redirected on a file">

<Execute command="grep toto /shared/data/bank/homo_sapiens 2> toto.log" />

Here, the error message is redirected to the file `toto.log` instead of being printed on the screen.

In case you want to redirect **stdout** and **stderr** in separate files, you can use both operators `1>` and `2>`

<Execute command="grep toto /shared/data/bank/homo_sapiens 1> toto_out 2> toto.log" />

And if you want to redirect both **stdout** and **stderr** in a common file you can use “&>”.

<Execute command="grep toto /shared/data/bank/homo_sapiens &> toto.log" />
