import React, { useState, useEffect } from 'react';
import "./SSO.css"
function SSOPage() {
  const [apiInfo, setApiInfo] = useState({
    afterLoginRedirectRoute: '',
    afterSignupRedirectRoute: '',
    apiKey: '',
    requiresAddress: false,
    requiresAvailability: false,
    requiresBio: false,
    requiresBirthdate: false,
    requiresEmail: false,
    requiresFirstName: false,
    requiresInterests: false,
    requiresLastName: false,
    requiresPhoneNumber: false,
    userUUID: '',
    websiteDomain: '',
    websiteServerDomain: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userUUID = 'testUUID'; 

  async function fetchJSON(route, options) {
    let response;
    try {
      response = await fetch(route, {
        credentials: 'include',
        method: options && options.method ? options.method : 'GET',
        body: options && options.method !== 'GET' ? JSON.stringify(options.body) : undefined,
        headers: options && options.method !== 'GET'
          ? { 'Content-Type': 'application/json' }
          : undefined,
      });
    } catch (error) {
      throw new Error(
        `Error fetching ${route} with options: ${options ? JSON.stringify(options) : options}. No response from server (failed to fetch). Error: ${error.message}`
      );
    }

    let responseJson;
    try {
      responseJson = await response.json();
    } catch (error) {
      throw new Error(
        `Error fetching ${route} with options: ${options ? JSON.stringify(options) : options}. Status: ${response.status}. Couldn't parse response as JSON. Error: ${error.message}`
      );
    }

    if (response.status < 200 || response.status >= 300 || responseJson.status === 'error') {
      throw new Error(
        `Error fetching ${route} with options: ${options ? JSON.stringify(options) : options}. Status: ${response.status}. Response: ${responseJson ? JSON.stringify(responseJson) : responseJson}`
      );
    }

    return responseJson;
  }

  useEffect(() => {
    const fetchApiInfo = async () => {
      try {
        const data = await fetchJSON(`https://localhost:3002/sso/get-api-info`);
        setApiInfo(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchApiInfo();
  }, [userUUID]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  function handleInputChange(event) {
    const { name, value } = event.target;
    setApiInfo(prev => ({ ...prev, [name]: value }));
  }

  async function saveInformation() {
    const route = `https://localhost:3002/sso/save-api-info/${apiInfo.userUUID}`;
  
    const body = {
      websiteDomain: apiInfo.websiteDomain,
      afterSignupRedirectRoute: apiInfo.afterSignupRedirectRoute,
      afterLoginRedirectRoute: apiInfo.afterLoginRedirectRoute,
      websiteServerDomain: apiInfo.websiteServerDomain,
      requiresEmail: apiInfo.requiresEmail,
      requiresFirstName: apiInfo.requiresFirstName,
      requiresLastName: apiInfo.requiresLastName,
      requiresAddress: apiInfo.requiresAddress,
      requiresPhoneNumber: apiInfo.requiresPhoneNumber,
      requiresInterests: apiInfo.requiresInterests,
      requiresBirthdate: apiInfo.requiresBirthdate,
      requiresAvailability: apiInfo.requiresAvailability,
      requiresBio: apiInfo.requiresBio
    };
  
    const options = {
      credentials: 'include',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), 
    };
  
    try {
      const response = await fetch(route, options);
      if (!response.ok) {
        throw new Error(`Failed to save information: ${response.statusText}`);
      }
      const responseData = await response.json();
      console.log('Information saved successfully:', responseData);
    } catch (error) {
      console.error('Failed to save information:', error);
    }
  }
  

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setApiInfo(prev => ({ ...prev, [name]: checked }));
  }

  return (
    <div id="sso-page">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <h1 className="title">SSO API Information</h1>
        <input
          className="input"
          placeholder="Website Domain"
          name="websiteDomain"
          value={apiInfo.websiteDomain}
          onChange={handleInputChange}
        />

        <input
          className="input"
          placeholder="Website Server Domain"
          name="websiteServerDomain"
          value={apiInfo.websiteServerDomain}
          onChange={handleInputChange}
        />

        <input
          className="input"
          placeholder="After Sign-Up Redirect Route"
          name="afterSignupRedirectRoute"
          value={apiInfo.afterSignupRedirectRoute}
          onChange={handleInputChange}
        />

        <input
          className="input"
          placeholder="After Login Redirect Route"
          name="afterLoginRedirectRoute"
          value={apiInfo.afterLoginRedirectRoute}
          onChange={handleInputChange}
        />

        <div className="grid-container">
          <label className="grid-item">
            <input
              type="checkbox"
              className="checkbox"
              id="requiresEmail"
              name="requiresEmail"
              checked={apiInfo.requiresEmail}
              onChange={handleCheckboxChange}
            />
            Email
          </label>
          <label className="grid-item">
            <input
              type="checkbox"
              className="checkbox"
              id="requiresFirstName"
              name="requiresFirstName"
              checked={apiInfo.requiresFirstName}
              onChange={handleCheckboxChange}
            />
            First Name
          </label>
          <label className="grid-item">
            <input
              type="checkbox"
              className="checkbox"
              id="requiresLastName"
              name="requiresLastName"
              checked={apiInfo.requiresLastName}
              onChange={handleCheckboxChange}
            />
            Last Name
          </label>
          <label className="grid-item">
            <input
              type="checkbox"
              className="checkbox"
              id="requiresAddress"
              name="requiresAddress"
              checked={apiInfo.requiresAddress}
              onChange={handleCheckboxChange}
            />
            Address
          </label>
          <label className="grid-item">
            <input
              type="checkbox"
              className="checkbox"
              id="requiresPhoneNumber"
              name="requiresPhoneNumber"
              checked={apiInfo.requiresPhoneNumber}
              onChange={handleCheckboxChange}
            />
            Phone Number
          </label>
          <label className="grid-item">
            <input
              type="checkbox"
              className="checkbox"
              id="requiresInterests"
              name="requiresInterests"
              checked={apiInfo.requiresInterests}
              onChange={handleCheckboxChange}
            />
            Interests
          </label>
          <label className="grid-item">
            <input
              type="checkbox"
              className="checkbox"
              id="requiresBirthdate"
              name="requiresBirthdate"
              checked={apiInfo.requiresBirthdate}
              onChange={handleCheckboxChange}
            />
            Birthdate
          </label>
          <label className="grid-item">
            <input
              type="checkbox"
              className="checkbox"
              id="requiresAvailability"
              name="requiresAvailability"
              checked={apiInfo.requiresAvailability}
              onChange={handleCheckboxChange}
            />
            Availability
          </label>
          <label className="grid-item">
            <input
              type="checkbox"
              className="checkbox"
              id="requiresBio"
              name="requiresBio"
              checked={apiInfo.requiresBio}
              onChange={handleCheckboxChange}
            />
            Bio
          </label>
        </div>
        <button type="button" className="button" onClick={saveInformation}>
          Save Information
        </button>

        <button type="button" className="button">
        Your Api Key: {apiInfo.apiKey}
        </button>
        

       <textarea>{`<a href="https://localhost:5173/SSO/login/${apiInfo.websiteDomain}">Login with SSO</a>`}</textarea>
        
      </form>

     
      
    </div>
  );
}

export default SSOPage;
