import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
      // runApp is provided by Flutter
      home: Scaffold(
          body: Container(
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
  ))));
}
