// Assuming you have a JavaScript function that fetches the top 5 tools data
// and returns it in a JSON format

fetchTop5Tools().then((tools) => {
  const toolsTbody = document.getElementById('tools-tbody');
  toolsTbody.innerHTML = '';

  tools.forEach((tool) => {
    const toolRow = `
      <tr>
        <td>${tool.name}</td>
        <td>${tool.description}</td>
        <td><img src="${tool.image}" alt="${tool.name}"></td>
      </tr>
    `;
    toolsTbody.innerHTML += toolRow;
  });
});

// Replace this with your actual function that fetches the data
function fetchTop5Tools() {
  // Simulating a fetch request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: 'Tool 1',
          description: 'This is tool 1',
          image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Tool 2',
          description: 'This is tool 2',
          image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Tool 3',
          description: 'This is tool 3',
          image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Tool 4',
          description: 'This is tool 4',
          image: 'https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          name: 'Tool 5',
          description: 'This is tool 5',
          image: 'https://images.pexels.com/photos/277014/pexels-photo-277014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ]);
    }, 1000);
  });
}