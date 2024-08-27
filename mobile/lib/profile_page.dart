import 'package:flutter/material.dart';
import 'package:hexcolor/hexcolor.dart';

class ProfilePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Profile', style: TextStyle(color: HexColor('#000000'))),
        centerTitle: true,
        elevation: 0,
        backgroundColor: HexColor('#FFFFFF'),
        leading: IconButton(
          icon: Icon(Icons.arrow_back_ios_new, color: HexColor('#000000')),
          onPressed: () {
            // Add functionality for the back button if needed
          },
        ),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(
                child: Column(
                  children: [
                    CircleAvatar(
                      radius: 50,
                      backgroundImage: AssetImage('assests/ellipse_1.jpeg'),
                    ),
                    SizedBox(height: 10),
                    Text(
                      'Sid',
                      style:
                          TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                    ),
                    Text('Admin', style: TextStyle(color: HexColor('#B0B0B0'))),
                  ],
                ),
              ),
              SizedBox(height: 20),
              ProfileOption(icon: Icons.person, title: 'My Account'),
              ProfileOption(icon: Icons.group, title: 'Saved Beneficiary'),
              ProfileOption(
                icon: Icons.fingerprint,
                title: 'Face ID / Touch ID',
                trailing: Switch(value: false, onChanged: (val) {}),
              ),
              ProfileOption(
                icon: Icons.security,
                title: 'Two-Factor Authentication',
              ),
              ProfileOption(icon: Icons.logout, title: 'Log out'),
              SizedBox(height: 20),
              Text('More', style: TextStyle(color: HexColor('#B0B0B0'))),
              ProfileOption(icon: Icons.help_outline, title: 'Help & Support'),
              ProfileOption(icon: Icons.info_outline, title: 'About App'),
            ],
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
        selectedItemColor: HexColor('#2196F3'),
      ),
    );
  }
}

class ProfileOption extends StatelessWidget {
  final IconData icon;
  final String title;
  final Widget trailing;

  const ProfileOption({
    Key? key,
    required this.icon,
    required this.title,
    this.trailing = const Icon(Icons.arrow_forward_ios, size: 16),
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Icon(icon, color: HexColor('#2196F3')),
      title: Text(title),
      trailing: trailing,
      onTap: () {
        // Add navigation or functionality here if needed
      },
    );
  }
}
