from django.db import migrations
from api.user.models import CustomUser


class Migration(migrations.Migration):
    def seed_data(apps, scheme_editor):
        user = CustomUser(name="Manivannan",
                          email="manivannan.belfazt@gmail.com",
                          is_staff=True,
                          is_superuser=True,
                          phone="987456123",
                          gender="Male"
                          )
        user.set_password("1234567890")
        user.save()

    dependencies = []

    operations = [
        migrations.RunPython(seed_data),
    ]
