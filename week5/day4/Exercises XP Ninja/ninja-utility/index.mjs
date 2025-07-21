#!/usr/bin/env node
import { Command } from 'commander';
import greet from './commands/greet.mjs';
import fetchData from './commands/fetch.mjs';
import readFile from './commands/read.mjs';

const program = new Command();

program
  .name('ninja-utility')
  .description('🛠 A multi-purpose command-line utility')
  .version('1.0.0');

// Greet command
program
  .command('greet')
  .description('Display a colorful greeting message')
  .action(greet);

// Fetch command
program
  .command('fetch')
  .description('Fetch data from an API and display it')
  .action(fetchData);

// Read command
program
  .command('read <file>')
  .description('Read and display content from a file')
  .action(readFile);

program.parse(process.argv);


