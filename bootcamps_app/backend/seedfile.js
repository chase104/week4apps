const State = require('./models/State.js');

// establish connection to MONGO
require('./config/db.js')
// instert all these objects into the "states" collection

const states = [
    { name: 'AL', tax: 0.06, tuitionAssistanceProgram: true },
    { name: 'AK', tax: 0.07, tuitionAssistanceProgram: false },
    { name: 'AZ', tax: 0.08, tuitionAssistanceProgram: true },
    { name: 'AR', tax: 0.09, tuitionAssistanceProgram: false },
    { name: 'CA', tax: 0.10, tuitionAssistanceProgram: true },
    { name: 'CO', tax: 0.07, tuitionAssistanceProgram: true },
    { name: 'CT', tax: 0.08, tuitionAssistanceProgram: false },
    { name: 'DE', tax: 0.06, tuitionAssistanceProgram: true },
    { name: 'FL', tax: 0.07, tuitionAssistanceProgram: true },
    { name: 'GA', tax: 0.09, tuitionAssistanceProgram: false },
    { name: 'HI', tax: 0.08, tuitionAssistanceProgram: true },
    { name: 'ID', tax: 0.07, tuitionAssistanceProgram: false },
    { name: 'IL', tax: 0.10, tuitionAssistanceProgram: true },
    { name: 'IN', tax: 0.06, tuitionAssistanceProgram: true },
    { name: 'IA', tax: 0.08, tuitionAssistanceProgram: false },
    { name: 'KS', tax: 0.09, tuitionAssistanceProgram: false },
    { name: 'KY', tax: 0.08, tuitionAssistanceProgram: true },
    { name: 'LA', tax: 0.07, tuitionAssistanceProgram: true },
    { name: 'ME', tax: 0.10, tuitionAssistanceProgram: false },
    { name: 'MD', tax: 0.09, tuitionAssistanceProgram: true },
    { name: 'MA', tax: 0.06, tuitionAssistanceProgram: false },
    { name: 'MI', tax: 0.07, tuitionAssistanceProgram: true },
    { name: 'MN', tax: 0.09, tuitionAssistanceProgram: false },
    { name: 'MS', tax: 0.08, tuitionAssistanceProgram: true },
    { name: 'MO', tax: 0.07, tuitionAssistanceProgram: false },
    { name: 'MT', tax: 0.10, tuitionAssistanceProgram: true },
    { name: 'NE', tax: 0.08, tuitionAssistanceProgram: true },
    { name: 'NV', tax: 0.07, tuitionAssistanceProgram: false },
    { name: 'NH', tax: 0.06, tuitionAssistanceProgram: true },
    { name: 'NJ', tax: 0.08, tuitionAssistanceProgram: true },
    { name: 'NM', tax: 0.10, tuitionAssistanceProgram: false },
    { name: 'NY', tax: 0.11, tuitionAssistanceProgram: true },
    { name: 'NC', tax: 0.08, tuitionAssistanceProgram: false },
    { name: 'ND', tax: 0.07, tuitionAssistanceProgram: true },
    { name: 'OH', tax: 0.08, tuitionAssistanceProgram: true },
    { name: 'OK', tax: 0.06, tuitionAssistanceProgram: false },
    { name: 'OR', tax: 0.09, tuitionAssistanceProgram: true },
    { name: 'PA', tax: 0.07, tuitionAssistanceProgram: false },
    { name: 'RI', tax: 0.08, tuitionAssistanceProgram: true },
    { name: 'SC', tax: 0.07, tuitionAssistanceProgram: true },
    { name: 'SD', tax: 0.08, tuitionAssistanceProgram: false },
    { name: 'TN', tax: 0.09, tuitionAssistanceProgram: true },
    { name: 'TX', tax: 0.06, tuitionAssistanceProgram: false },
    { name: 'UT', tax: 0.07, tuitionAssistanceProgram: true },
    { name: 'VT', tax: 0.08, tuitionAssistanceProgram: false },
    { name: 'VA', tax: 0.09, tuitionAssistanceProgram: true },
    { name: 'WA', tax: 0.10, tuitionAssistanceProgram: false },
    { name: 'WV', tax: 0.07, tuitionAssistanceProgram: true },
    { name: 'WI', tax: 0.08, tuitionAssistanceProgram: true }
];

const insert = async () => {
    // dont want to enter all the states twice 
    await State.deleteMany()
    await State.insertMany(states);
} 
insert()


