import pandas as pd
from urllib.request import urlopen
from bs4 import BeautifulSoup

# scraping for all clinics & polyclinics 
url = "https://www.healthhub.sg/directory/clinics-and-polyclinics"
html = urlopen(url)

soup = BeautifulSoup(html, 'lxml')

clinic_names = []
clinic_addresses = []
clinic_pc = []

for clinic in soup.find_all("span", {"class": "app_ment"}): 
  # removing dental & aesthetic clinics
  clinic_name = clinic.contents[0].strip()
  if 'DENTAL' and 'AESTHETIC' not in clinic_name: 
    # collect name 
    clinic_names.append(clinic_name) 
    # collect corresponding address 
    clinic_add = clinic.find("span", {"class": "add_sign"}).get_text()
    clinic_addresses.append(clinic_add) 
    # isolate postal code for distance determination 
    start_idx_pc = clinic_add.find("Singapore ")
    postal_code = clinic_add[start_idx_pc: start_idx_pc + 17]
    clinic_pc.append(postal_code)


# scraping for all hospitals
url = "https://www.healthhub.sg/directory/hospitals"
html = urlopen(url)

soup = BeautifulSoup(html, 'lxml')

hospital_names = []
hospital_addresses = []
hospital_pc = []

for hosp in soup.find_all("span", {"class": "app_ment"}): 
  # removing niche hospitals (IMH/ Heart Center)
  hosp_name = hosp.contents[0].strip()
  if 'MENTAL' and 'HEART' not in hosp_name: 
    # collect name 
    hospital_names.append(hosp_name) 
    # collect corresponding address 
    hosp_add = hosp.find("span", {"class": "add_sign"}).get_text()
    hospital_addresses.append(hosp_add) 
    # isolate postal code for distance determination 
    start_idx_pc = hosp_add.find("Singapore ")
    postal_code = hosp_add[start_idx_pc: start_idx_pc + 17]
    hospital_pc.append(postal_code)
    
