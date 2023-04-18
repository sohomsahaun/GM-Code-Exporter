# GM Code Exporter
GM Code Exporter exports code from `.gml` files in a GameMaker project.

It is very quickly put together without much polish - but it does the job!
&nbsp;
## Usage

You need to have [Node.js](https://nodejs.org/) installed to use this tool from the CLI.

Run the following command:
```shell
node index.js --obj --scr --yyp <yyp_path_here>
```

| Argument | Description |
| -- | -- |
| --yyp \<path\> | Path to the yyp file |
| --obj | Get code from the objects |
| --scr | Get code from the scripts |

&nbsp;

An output text file will be generated in the `./out/` directory.
