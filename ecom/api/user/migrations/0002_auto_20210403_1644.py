# Generated by Django 3.0.8 on 2021-04-03 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='session_token',
            field=models.CharField(default='0', max_length=20),
        ),
    ]
