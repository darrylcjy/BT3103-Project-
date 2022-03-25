function covidFunc() {
    const email = "covidcare-9c38b@appspot.gserviceaccount.com";
    const key = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCfTO1zRtx9K5Rz\nMUBHpbyCQSdBSkrancKKIgtlIS77wzD9wEKVq6ygIvUxhGtSwiMGS9FLZ6nJjQ+n\nUu3hi3fEW4dUK1c1HZ7T1C7G3Xkc58wWPlrvXfvru59cuPBIHmUN4WdNKikfxG7i\nUkuzeR2FgA9ZvFP2CpwZMuVUrR9WtnAOlFhE7I5che6psAXFQlpN0mFADcjucE1L\ne344gUXlfJUI5HaS/8NAPwNaaosB7ig3k+52Z+WRdom3/0jX4QtysPhTMFZSNpN5\nJ4eOr+72y1zUP+pzg4j5g+ET/7GbHyIweNbkmQ2s+Yuxu3rKWOYLrV2DZotHGdmG\nmZo6i1bPAgMBAAECggEANjcnvyp4Qw9wbA3wixHgiNIkyoc+142Glp2ElEwJYfzp\n8QqcfrTZQPz0xwACyL0yz2NBXXDv650bHT7PoAnn3oeqFJ7VhMnKctyNePgKTqij\nIFTjfQDXCsEluRhmCp1xlhpHHo+BRIMFm/gXNIM9ZWCSmN9MEfpFaxwTydBL0KYn\ngCT8KjdMj8C62NoFTEEUwcbWdZUHJ6/P0XECJzJ/Pbo9kBhZsqacyYWS11QbHU70\nfuFcrQowczjzeCxUPAFPOhxIdgg3Y/KfTHIaUPuox46HERdjblYx/Pb6khzHElOY\nygg36QiNstvtCPkm8G3fBIb6+AvGtyDFM2eV1Wm4zQKBgQDeTuDgNZIKwVL4K76v\nhv8hsuOlU4w+AjISQm0BkC3T9yTQbivBJlRC0BvvMZsH9oa2maKNfWWHL7KK0MZj\nNk+MXMv0OuoydfWIn4Ob27nf7abq3RDd18r63A/HwSPhryREF1/XVZVeKjvWSOR/\neXmTsZ7RA6YIQjQYiuHCwgo7vQKBgQC3cXntv3zeamkc0fWmlSSX4DieKGm62Dz5\nSJkZhKnjebPyPC6rzmuXBjOFl7xMmKPEHoEJTYrpMpUtQPG4ZnJ8vrqDk9yZfc43\n9jKN6889IfQFKcbysfrnIftVC7qCEw2dX/oVk0pJa1e86r7qFN1I+FfWpi598nnr\nPc7c4ePfewKBgFXPWqwQ4ZN3NiCHOi6kzDxkwcxiKIMS8+LqcwskbRwhjLtLm2YN\n9n5nuDCnFDGJrkwzl3RID/WTqrY8iidnomMKustGJnpd3+3hrLpvoRrXsBN+S3Fm\nR3p3kTvIyKHnqfcCksMazPIxGTHIpzKxYAVrjWMepmsPqu5CRYyYu7x9AoGAP/el\nAd+lJlXK447fb0BQq1k3xQbon4vp7y9+m6RkLXtx4UVVLPnlEJvL+YjI05jiem/8\npQbSKrFFzar430lyIMfNeDZmVWvGLkN+q3iQIowlcGt6AYVIrbJu1uApIFSOidM+\n/KkI3YM97BWbjzrJUzmuP55hVe/ozbwW13U5peMCgYAgYbvxaPeVMaqIrjZopVGe\nTXqUPDxkTCuTvyZcGCdc9xnMjNMwUsx1J9Q9KlW+4nWELpyvUfrB0AfuN74y0oml\n+Ci0gV8PApUVZs5RqJF0WLrerIAEy4Ol6YLo53mTFOK9thXDrAFYdqrfjApmj+pT\n+xTtldR8DEOYlqOQkqVv/w==\n-----END PRIVATE KEY-----\n";
    const projectId = "covidcare-9c38b";
    var firestore = FirestoreApp.getFirestore (email, key, projectId);
   
   
   // get document data from ther spreadsheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetname = "clinics";
    var sheet = ss.getSheetByName(sheetname); 
    // get the last row and column in order to define range
    var sheetLR = sheet.getLastRow(); // get the last row
    var sheetLC = sheet.getLastColumn(); // get the last column
 
    var dataSR = 2; // the first row of data
    // define the data range
    var sourceRange = sheet.getRange(2,1,sheetLR-dataSR+1,sheetLC);
 
    // get the data
    var sourceData = sourceRange.getValues();
    // get the number of length of the object in order to establish a loop value
    var sourceLen = sourceData.length;
   
   // Loop through the rows
    for (var i=0;i<sourceLen;i++){
      if(sourceData[i][1] !== '') {
        var data = {};
        /*
        var dateSt = sourceData[i][0].toString();
        var stDate = new Date(dateSt);
        var stringfied = JSON.stringify(stDate);
        var updatedDt = stringfied.slice(1,11);
        */
 
        data.name = sourceData[i][0];
        data.block = sourceData[i][1];
        data.street = sourceData[i][2];
        data.postalCode = sourceData[i][3];
        data.tel = sourceData[i][4];
        data.opening = sourceData[i][5];
         
        firestore.createDocument("clinics",data);
 
      }
     
   }
 }
 
 