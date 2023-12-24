import 'package:flutter/material.dart';

import 'gradient_container.dart';

void main() {
  runApp(const MaterialApp(
      // runApp is provided by Flutter
      home: Scaffold(body: GradientContainer([Colors.white, Colors.black]))));
}
