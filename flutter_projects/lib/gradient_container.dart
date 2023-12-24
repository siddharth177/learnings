import 'package:flutter/material.dart';
import 'package:flutter_projects/text_widget.dart';

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
      child: const Center(child: TextWidget()),
    );
  }
}
