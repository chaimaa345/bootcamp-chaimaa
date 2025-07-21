// colorful-message.js
import chalk from 'chalk';

export function showColorfulMessage() {
  console.log(chalk.blue.bgWhite.bold('🎨 Welcome to your colorful terminal!'));
  console.log(chalk.green('✅ Everything is working perfectly!'));
}
