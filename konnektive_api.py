import requests

def query_orders(start_date, end_date):
    url = "https://api.konnektive.com/order/query/"
    params = {
        "loginId": "api-kendall",
        "password": "Api1234567",
        "startDate": start_date,
        "endDate": end_date
    }
    response = requests.get(url, params=params)
    orders = response.json()
    return orders
