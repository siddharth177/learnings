import 'package:flutter/material.dart';

class TextWidget extends StatelessWidget {
  const TextWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text(
      'Hello World!',
      style: TextStyle(color: Colors.white, fontSize: 28),
    );
  }
}
