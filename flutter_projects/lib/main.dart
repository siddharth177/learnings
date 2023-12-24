import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(
      // runApp is provided by Flutter
      home: Scaffold(body: GradientContainer())));
}

class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          colors: [Colors.yellow, Colors.red],
          begin: Alignment.topRight,
          end: Alignment.topLeft,
        ),
      ),
      child: const Center(
          child: Text(
        'Hello World!',
        style: TextStyle(color: Colors.white),
      )),
    );
  }
}
