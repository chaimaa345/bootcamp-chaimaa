exports.seed = async function(knex) {
  // Clear old data
  await knex('questions_options').del();
  await knex('options').del();
  await knex('questions').del();

  // Insert a question
  const [q1] = await knex('questions')
    .insert({ question: 'What is the capital of France?', correct_answer: 1 })
    .returning('id');

  // Insert options
  const options = await knex('options')
    .insert([
      { option_text: 'Paris' }, 
      { option_text: 'London' },
      { option_text: 'Berlin' },
      { option_text: 'Rome' }
    ])
    .returning('id');

  // Link options to the question
  const links = options.map(optId => ({
    question_id: q1.id || q1,  // depending on pg version
    option_id: optId.id || optId
  }));
  await knex('questions_options').insert(links);
};

