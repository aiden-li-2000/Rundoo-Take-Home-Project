# Generated by Django 4.2.3 on 2023-07-07 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='email',
            field=models.CharField(max_length=255),
        ),
    ]
