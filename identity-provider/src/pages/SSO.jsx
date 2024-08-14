import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importing uuid
import './SSOPage.css';

function SSOPage() {
  const [formData, setFormData] = useState({
    websiteDomain: '',
    signUpRedirect: '',
    signInRedirect: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Abdiwahid testing if backend and front end is still connecting and working
        const response = await fetch('http://localhost:3002/NO');
       const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData()

    return () => {
      console.log('Component will unmount');
    };
  }, []); 

  async function fetchJSON(route, options) {
    let response;
    try {
        response = await fetch(route, {
            method: options && options.method ? options.method : "GET",
            body: options && options.method !== 'GET' ? JSON.stringify(options.body) : undefined,
            headers: options && options.method !== 'GET'
                ? { "Content-Type": "application/json" }
                : undefined,
        });
    } catch (error) {
        throw new Error(
            `Error fetching ${route} with options: ${
                options ? JSON.stringify(options) : options
            }. No response from server (failed to fetch). Error: ${error.message}`
        );
    }

    let responseJson;
    try {
        responseJson = await response.json();
    } catch (error) {
        throw new Error(
            `Error fetching ${route} with options: ${
                options ? JSON.stringify(options) : options
            }. Status: ${response.status}. Couldn't parse response as JSON. Error: ${error.message}`
        );
    }

    if (response.status < 200 || response.status >= 300 || responseJson.status === "error") {
        throw new Error(
            `Error fetching ${route} with options: ${
                options ? JSON.stringify(options) : options
            }. Status: ${response.status}. Response: ${
                responseJson ? JSON.stringify(responseJson) : responseJson
            }`
        );
    }

    return responseJson;
}

async function findUser(uuid) {
  const route = `http://localhost:3002/SSO/user?UUID=${uuid}`; 

  try {
      const response = await fetchJSON(route, {
          method: 'GET',
      });

      console.log('User retrieved successfully:', response);
      return response;
  } catch (error) {
      console.error('An error occurred:', error.message);
  }
}


findUser('your-uuid-here');


  async function updateUserData() {
    const route = 'http://localhost:3002/SSO/update?email=help@gmail.com'; // ?userName=username 
    const options = {
        method: 'PATCH',
        body: {
            UUID: 'your-uuid-here', 
            firstName: 'John', 
            lastName: 'Doe',
            address: '123 Main St',
            phone: 1234567890,
            interests: ['coding', 'music'],
            birthday: '1990-01-01',
            avaliability: ['Monday', 'Wednesday'],
        }
    };

    try {
        const response = await fetchJSON(route, options);
        console.log('User updated or created successfully:', response);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

updateUserData();




  const [accessPermissions, setAccessPermissions] = useState({
    username: false,
    name: false,
    email: false,
    phone: false,
    streetAddress: false
  });

  const [apiKey, setApiKey] = useState('');

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setAccessPermissions(prev => ({ ...prev, [name]: checked }));
  }

  // Create a new scheme
  // Info form field info

  // Another text field backend relying party backedn

  function generateApiKey() {
    const key = uuidv4(); 
    setApiKey(key);
    alert(`Your new API key is: ${key}`);
  }

  return (
    <div id="sso-page">
      <form className="form">
        <h1 className="title">Create an SSO button for your website</h1>
        <input className="input" placeholder="Website Domain" name="websiteDomain" value={formData.websiteDomain} onChange={handleInputChange} />
        <input className="input" placeholder="After Sign-Up Redirect Page" name="signUpRedirect" value={formData.signUpRedirect} onChange={handleInputChange} />
        <input className="input" placeholder="After Sign-In Redirect Page" name="signInRedirect" value={formData.signInRedirect} onChange={handleInputChange} />
        <input className="input" placeholder="Relying Part Page" name="signUpRedirect" value={formData.signUpRedirect} onChange={handleInputChange} />

        <input type="checkbox" className="checkbox" id="username" name="username" checked={accessPermissions.username} onChange={handleCheckboxChange} />
        <label htmlFor="username" className="label">Username</label>
        
        <input type="checkbox" className="checkbox" id="name" name="name" checked={accessPermissions.name} onChange={handleCheckboxChange} />
        <label htmlFor="name" className="label">Name</label>
        
        <input type="checkbox" className="checkbox" id="email" name="email" checked={accessPermissions.email} onChange={handleCheckboxChange} />
        <label htmlFor="email" className="label">Email Address</label>
        
        <input type="checkbox" className="checkbox" id="phone" name="phone" checked={accessPermissions.phone} onChange={handleCheckboxChange} />
        <label htmlFor="phone" className="label">Phone Number</label>
        
        <input type="checkbox" className="checkbox" id="streetAddress" name="streetAddress" checked={accessPermissions.streetAddress} onChange={handleCheckboxChange} />
        <label htmlFor="streetAddress" className="label">Street Address</label>
        <button type="button" className="button">Save Information</button>
      </form>
    </div>
  );
}

export default SSOPage;
