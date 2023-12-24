import 'package:flutter/material.dart';

final Alignment startAlignment =
    Alignment.topRight; // value never changes again
const Alignment endAlignment = Alignment
    .topLeft; // we can't resign the variable and get locked in during the code is compiled

class GradientContainer extends StatelessWidget {
  const GradientContainer(this.colors, {super.key});

  final List<Color> colors;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: colors,
          begin: startAlignment,
          end: endAlignment,
        ),
      ),
      child: Center(
        child: Image.asset('assets/dice_images/dice-1.png', width: 200),
      ),
    );
  }
}
