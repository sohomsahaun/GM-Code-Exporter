# GM Code Exporter
GM Code Exporter exports code from objects and scripts in a GameMaker project to a text file.

It is very quickly put together without much polish - but it does the job!


## Usage

You need to have [Node.js](https://nodejs.org/) installed to use this tool from the CLI.

If you are using it for the first time, you need to install the dependecies using:
```shell
npm install
```

Run the following command:
```shell
node index.js --obj --scr --yyp <yyp_path_here>
```

| Argument | Description |
| -- | -- |
| --yyp \<path\> | Path to the yyp file |
| --obj | Get code from the objects |
| --scr | Get code from the scripts |

An output text file will be generated in the `./out/` directory.


## Customization

You can customize the header and footer of how each file is printed in the output. The classes can be edited from `./src/Types.js`.

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan=2>Object</td>
      <td>get_header</td>
      <td>Header of code from GM objects</td>
    </tr>
    <tr>
      <td>get_footer</td>
      <td>Footer of code from GM objects</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan=2>Script</td>
      <td>get_header</td>
      <td>Header of code from GM scripts</td>
    </tr>
    <tr>
      <td>get_footer</td>
      <td>Footer of code from GM scripts</td>
    </tr>
  </tbody>
</table>

All methods have the same argument, `fname`, which indicates the gml file name the code is being read from.
