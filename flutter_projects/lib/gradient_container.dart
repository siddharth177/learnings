import 'package:flutter/material.dart';
import 'package:flutter_projects/text_widget.dart';

Alignment startAlignment = Alignment.topRight;
Alignment endAlignment = Alignment.topLeft;

class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: const [Colors.yellow, Colors.red],
          begin: startAlignment,
          end: endAlignment,
        ),
      ),
      child: const Center(child: TextWidget()),
    );
  }
}
