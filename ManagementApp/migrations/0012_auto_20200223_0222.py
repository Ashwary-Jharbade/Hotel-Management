# Generated by Django 2.0.2 on 2020-02-22 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ManagementApp', '0011_auto_20200223_0003'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderdrink',
            name='email',
            field=models.CharField(default='dummygmail@gmail.com', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orderfood',
            name='email',
            field=models.CharField(default='dummygamil@gmail.com', max_length=50),
            preserve_default=False,
        ),
    ]
