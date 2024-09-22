<script>
import Execute from "components/Execute.svelte";
</script>

We previously introduced the standard input and standard output and pointed out that the input and output of a Unix command are also called streams. 

Changing their default values (keyboard or screen) is called **redirection**.

In addition to standard input (**stdin**) and standard output (**stdout**), a third stream, the standard error (**stderr**), exists.

<img src="/data/linux_basics_session04/stream_in_out_err.png" style="max-width:100%" alt="error stream of a command">

By default, **stderr** is also displayed on the terminal screen. The purpose of this third stream is to convey error messages. However it may also contain additional messages including  warnings or logs, depending on the command and its parameters.

As an example, the following command generates an error. While searching for a word in a file is valid, attempting to search within a directory is not.

```bash
grep foo /shared/data/bank/homo_sapiens
```

The error message will be directed to the **stderr** stream, which is printed on the terminal by default.

However, the **stderr** stream may be empty if the Unix command runs without error.

As previously mentioned for **stdin** and **stdout**, it is also possible to redirect **stderr** to a file using the `2>` operator.

<img src="/data/linux_basics_session04/stream_in_outfile_errfile.png" style="max-width:100%" alt="error stream of a command redirected on a file">

```bash
grep foo /shared/data/bank/homo_sapiens 2> error.log
```

⚠️ today, in this course, the `2>`, the `1>`, and the `2>&1` operators are not yet supported. We will change this as soon as possible but in the meantime the following commands do not work.

Here, the error message is redirected to the `error.log` file instead of being displayed on screen.

If you want to redirect **stdout** and **stderr** in separate files, you can use both the `1>` and `2>` operators.

```bash
grep foo /shared/data/bank/homo_sapiens 1> sdt_out.txt 2> error.log
```

And if you want to redirect both **stdout** and **stderr** in a common file you can use `2>&1`.

```bash
grep foo /shared/data/bank/homo_sapiens 2>&1 std_out_and_log.txt
```
