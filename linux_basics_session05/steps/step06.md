<script> import Quiz from "components/Quiz.svelte"; import Execute from "components/Execute.svelte"; </script> 

# Debugging Errors

"Errare humanum est": When writing command lines, mistakes are common. That's why it's essential to carefully read error messages.
Below, we highlight some errors that may be encountered when running `seqkit` and explain how to identify, interpret, and fix them.

## Example 1: Invalid command

When calling some command seqkit complains that the command does not exist. An example is provided below:

```
$ seqkit Stats -h
```

The following message is returned:

```
Error: unknown command "Stats" for "seqkit"

Did you mean this?
	scat
	stats

Run 'seqkit --help' for usage.
unknown command "Stats" for "seqkit"

Did you mean this?
	scat
	stats
```

**Explanation:**  The user attempted to call the `Stats` command, but `seqkit` responds with an error because command names are case-sensitive. The correct command is `stats` (lowercase), not `Stats` (with uppercase S).

## Example 2: Invalid Option

 common mistake is providing an incorrect argument to a command. As an example, attempting to run `seqkit -help` triggers an error before displaying the help message (and repeats the error at the end).

```
$ seqkit -help
```

This results in the following error message:

```
Error: unknown shorthand flag: 'e' in -elp
```

**Explanation :** The `-help` option is not valid in `seqkit`. The correct options are `--help` or `-h`. However, since `seqkit -h` is recognized, the help message is displayed. The remaining letters, `elp`, are treated as separate short flags (*i.e.*, `-e, -l, and -p`). Since `-e` is not a valid flag, the command fails.

## Example 3: Invalid option ordering

When using a `seqkit` subcommands, the instruction should always begin with `seqkit`, followed by the desired command. Any deviation from this structure will result in an error, which may (or not) clearly point out the issue.

```
$ seqkit -a stats NA12878.fasta
```

Here’s the resulting error message:

```
Error: unknown command "NA12878.fasta" for "seqkit"
```

**Explanation:**  In this case, the user mistakenly placed the `-a` argument before the `stats` command. As a result, `NA12878.fasta` is incorrectly interpreted as a command, triggering the error.


## Tips

- Errors are typically displayed on the last line (just before the program terminates…).
- Take the time to read the errors carefully and try to understand them.
- Use the internet or your preferred chatbot to help interpret them.
- Do not place arguments before the subcommand name.
- The file name is a **positional argument** in seqkit commands, meaning it should be provided as the **last argument** in the command.


