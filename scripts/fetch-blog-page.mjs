import http from 'http';

const url = 'http://localhost:3000/blogs/trademark/how-to-register-a-trademark-in-india-complete-guide';

console.log(`Fetching HTML from ${url}...`);

http.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log(`Status Code: ${res.statusCode}`);
    console.log(`Headers:`, res.headers);
    console.log(`HTML Length: ${data.length}`);
    
    // Print first 500 chars and search for some keywords
    console.log('\n--- FIRST 500 CHARS ---');
    console.log(data.slice(0, 500));
    
    console.log('\n--- KEYWORD SEARCH ---');
    console.log('Contains PageHeader title "How to Register":', data.includes('How to Register a Trademark in India'));
    console.log('Contains body text "establishing a unique identity":', data.includes('establishing a unique identity'));
    console.log('Contains sidebar text "Talk to an Expert":', data.includes('Talk to an Expert'));
    
    process.exit(0);
  });
}).on('error', (err) => {
  console.error('Error fetching page:', err.message);
  process.exit(1);
});
