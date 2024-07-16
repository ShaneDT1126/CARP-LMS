from azure.storage.blob import generate_blob_sas, BlobSasPermissions
from datetime import datetime, timedelta
from django.conf import settings


def generate_blob_sas_url(blob_name):
    account_name = settings.AZURE_ACCOUNT_NAME
    account_key = settings.AZURE_ACCOUNT_KEY
    container_name = settings.AZURE_CONTAINER

    sas_token = generate_blob_sas(
        account_name=account_name,
        container_name=container_name,
        blob_name=blob_name,
        account_key=account_key,
        permission=BlobSasPermissions(read=True),
        expiry=datetime.utcnow() + timedelta(hours=1)
    )

    return f"https://{account_name}.blob.core.windows.net/{container_name}/{blob_name}?{sas_token}"
