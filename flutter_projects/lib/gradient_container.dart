import 'package:flutter/material.dart';
import 'package:flutter_projects/text_widget.dart';

var startAlignment = Alignment.topRight;
var endAlignment = Alignment.topLeft;

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
