<script> import Quiz from "$components/Quiz.svelte"; import Execute from "$components/Execute.svelte"; </script> 

# Debugging errors

*Errare humanum est* ... When writing command lines, mistakes are common. That's why it's essential to carefully read error messages.
Below, we highlight some errors that may be encountered when running `seqkit` and explain how to identify, interpret, and fix them.

## Example 1: invalid command

When calling some command `seqkit` may complain that the command does not exist. An example is provided below:

```bash
seqkit Stats -h
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

## Example 2: invalid option

A common mistake is to provide an incorrect argument to a command. As an example, attempting to run `seqkit -help` triggers an error before displaying the help message (and repeats the error at the end).

```bash
seqkit -help
```

This results in the following error message in the first and last lines:

```
Error: unknown shorthand flag: 'e' in -elp
```

**Explanation :** The `-help` option is not valid in `seqkit`. The correct options are `--help` (double hyphens) or `-h` (short flag of `--help`). However, since `seqkit -h` is recognized, the help message is displayed. The remaining letters, `elp`, are treated as separate short flags (*i.e.*, `-e`, `-l`, and `-p`). Since `-e` is not a valid flag, the command fails.

## Example 3: invalid order

When using a `seqkit` subcommand, the instruction should always begin with `seqkit`, followed by the desired subcommand. Any deviation from this structure will result in an error, which may (or not) clearly point out the issue.

<!--- (sandbox.bio)/root/tutorial vs (IFB)/shared/data -->
```bash
seqkit -a stats /root/tutorial/bank/saccharomyces_cerevisiae/SacCer3/fasta/sacCer3.fa.gz
```

Here’s the resulting error message:

<!--- (sandbox.bio)/root/tutorial vs (IFB)/shared/data -->
```
Error: unknown command "/root/tutorial/bank/saccharomyces_cerevisiae/SacCer3/fasta/sacCer3.fa.gz" for "seqkit"
```

<!--- (sandbox.bio)/root/tutorial vs (IFB)/shared/data -->
**Explanation:**  In this case, the user mistakenly placed the `-a` argument before the `stats` command. As a result, the input file name, `/root/tutorial/bank/saccharomyces_cerevisiae/SacCer3/fasta/sacCer3.fa.gz`, is incorrectly interpreted as a command, triggering the error.

<Quiz id="step06_01" choices={[
         { valid: true, value: "Seqkit stats -a sacCer3.fa.gz"},
         { valid: true, value: "seqkit stats -a sacCer3.fasta.gz"},
         { valid: false, value: "seqkit stats -a sacCer3.fa.gz"},
         { valid: true, value: "seqkit stats -A sacCer3.fa.gz"},
         { valid: true, value: "seqkit fx2tab -C -n A sacCer3.fa.gz"},
         { valid: false, value: "seqkit fx2tab -C A -n sacCer3.fa.gz"},
         { valid: false, value: "seqkit fx2tab -n -C A sacCer3.fa.gz"},
]}>
        <span slot="prompt">
        <!--- (sandbox.bio)/root/tutorial vs (IFB)/shared/data -->
	If one is located in the '/root/tutorial/bank/saccharomyces_cerevisiae/SacCer3/fasta/' folder, which instruction(s) would result in an error?
        </span>
</Quiz>

## Tips

- Errors are typically displayed on the last line (just before the program terminates…).
- Take the time to read the errors carefully and try to understand them (use internet or your preferred chatbot to help interpret them).
- Follow the instructions provided the "Usage" section (*e.g* do not place arguments before the subcommand name).
- The file name is a **positional argument** in seqkit commands, meaning it should be provided as the **last argument** in the command.


