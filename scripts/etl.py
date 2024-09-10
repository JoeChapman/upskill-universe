import csv
import json
import os

def extract_data(file_path):
  data_list = []

  try:
    if not os.path.exists(file_path):
      return f"Error: The file '{file_path}' was not found."

    with open(file_path, mode='r') as csv_file:
      csv_reader = csv.DictReader(csv_file)

    for row in csv_reader:
      data_list.append(dict(row))
  
  except FileNotFoundError:
    return f"Error: The file '{file_path}' was not found."

  return data_list

def transform_data(data):
  for entry in data:
    if 'salary' in entry:
      entry['salary'] = float(entry['salary'])
      entry['tax'] = entry['salary'] * 0.2

  return data

def load_data(data, output_file='output.json'):
  with open(output_file, 'w', encoding='utf-8') as json_file:
    json.dump(data, json_file, indent=4, ensure_ascii=False)

